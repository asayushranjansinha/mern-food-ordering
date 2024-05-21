import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckBox";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div className="">
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
          Select Cuisines that your restaurant serves
        </FormDescription>
        <FormField
          control={control}
          name="cuisines"
          render={({ field }) => (
            <FormItem>
              <div className="grid md:grid-cols-5 gap-1">
                {cuisineList.map((cuisine, index) => (
                  <CuisineCheckBox
                    cuisine={cuisine}
                    field={field}
                    key={index}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
export default CuisinesSection;
