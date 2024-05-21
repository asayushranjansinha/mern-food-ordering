import {
  useCreateRestaurant,
  useGetRestaurantInfo,
  useUpdateRestaurantInfo,
} from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurant = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();
  const { restaurant } = useGetRestaurantInfo();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurantInfo();

  const restaurantExists = !!restaurant;
  return (
    <div className="container mx-auto py-[2rem]">
      <ManageRestaurantForm
        onSave={restaurantExists ? updateRestaurant : createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
        restaurant={restaurant}
      />
    </div>
  );
};
export default ManageRestaurant;
