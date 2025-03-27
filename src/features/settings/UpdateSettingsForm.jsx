import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { register } = useForm();
  const { isLoading, settings = {} } = useSettings();
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestPerBooking,
    breakFastPrice,
  } = settings;
  const { isUpdating, updateSettings } = useUpdateSettings();

  function handleUpdate(e, oldValue, field) {
    const value = e.target.value;
    if (!value) return;
    if (+value === oldValue) return;
    updateSettings({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow lableValue="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          {...register("minBookingLength", {
            disabled: isUpdating,
            onBlur: (e) =>
              handleUpdate(e, minBookingLength, "minBookingLength"),
          })}
        />
      </FormRow>
      <FormRow lableValue="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          {...register("maxBookingLength", {
            disabled: isUpdating,
            onBlur: (e) =>
              handleUpdate(e, maxBookingLength, "maxBookingLength"),
          })}
        />
      </FormRow>
      <FormRow lableValue="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          {...register("maxGuestPerBooking", {
            disabled: isUpdating,
            onBlur: (e) =>
              handleUpdate(e, maxGuestPerBooking, "maxGuestPerBooking"),
          })}
        />
      </FormRow>
      <FormRow lableValue="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakFastPrice}
          {...register("breakFastPrice", {
            disabled: isUpdating,
            onBlur: (e) => handleUpdate(e, breakFastPrice, "breakFastPrice"),
          })}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
