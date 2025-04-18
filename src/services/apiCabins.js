import supabase, { supabaseUrl } from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function getCabins() {
  const { data: cabins, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return cabins;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${uuidv4()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const hasImagePath = Boolean(typeof newCabin.image === "string"); // Using this specifically for Duplicate Cabin functionality

  //1. Create the cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: hasImagePath ? newCabin.image : imagePath }])
    .select()
    .single();

  if (error) {
    throw new Error("Cabin cannot be created");
  }

  //2. Upload Cabin
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //Delete the Cabin IF there is an error uploading cabin image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the Cabin was not created"
    );
  }

  return data;
}

export async function editCabin(newCabin) {
  console.log(newCabin);
  const imageName = `${uuidv4()}-${newCabin.image.name}`.replaceAll("/", "");
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Update cabin
  const { data, error } = await supabase
    .from("cabins")
    .update({ ...newCabin, image: imagePath })
    .eq("id", newCabin.id)
    .select();

  if (error) {
    throw new Error("Cabin cannot be edited");
  }

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);
    //Delete the Cabin IF there is an error uploading cabin image
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error(
        "Cabin image could not be uploaded and the Cabin was not created"
      );
    }
  }

  return data;
}
