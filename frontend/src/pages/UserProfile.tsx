import { useGetUserInfo, useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfile = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { currentUser, isLoading: isGetLoading } = useGetUserInfo();

  if (isGetLoading) return <span>Loading...</span>;
  if (!currentUser) return <span>Unable to load user profile</span>;
  return (
    <div className="container mx-auto py-[2rem]">
      <UserProfileForm
        isLoading={isUpdateLoading}
        onSave={updateUser}
        currentUser={currentUser}
      />
    </div>
  );
};
export default UserProfile;
