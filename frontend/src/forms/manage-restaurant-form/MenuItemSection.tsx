import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { Button } from "@/components/ui/button";

const MenuItemSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });
  return (
    <div className="space-y-2">
      <div className="">
        <h2 className="text-2xl font-bold ">Menu</h2>
        <FormDescription>Create Your Menu</FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                removeMenuItem={() => remove(index)}
                key={index}
              />
            ))}
          </FormItem>
        )}
      />
      <Button type="submit" onClick={() => append({ name: "", price: "" })}>
        Add Menu Item
      </Button>
    </div>
  );
};
export default MenuItemSection;
