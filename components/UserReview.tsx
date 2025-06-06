import { UserBookInfoType } from "@/lib/types";
import Link from "next/link";
import StarRating from "./StarRating";
import { Avatar, AvatarImage } from "./ui/avatar";
import { DialogDescription } from "./ui/dialog";

type UserReviewProps = {
  currentUserId: string | undefined;
  userCommentsAndNote: UserBookInfoType;
};

const UserReview = ({
  currentUserId,
  userCommentsAndNote,
}: UserReviewProps) => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <Link
          href={
            currentUserId === userCommentsAndNote.userId
              ? "/myaccount"
              : `/users/${userCommentsAndNote.userId}`
          }
        >
          <div className="flex gap-2">
            {userCommentsAndNote.imgURL !== "" ? (
              <Avatar>
                <AvatarImage
                  src={userCommentsAndNote.imgURL}
                  className="object-cover"
                />
              </Avatar>
            ) : (
              <Avatar className="flex items-center justify-center bg-secondary">
                {userCommentsAndNote.userName.charAt(0).toUpperCase()}
              </Avatar>
            )}
            <DialogDescription className="flex underline">
              {userCommentsAndNote.userName}
            </DialogDescription>
          </div>
        </Link>
        {userCommentsAndNote.userNote ? (
          <StarRating value={userCommentsAndNote.userNote} />
        ) : (
          <p>Aucune note</p>
        )}
      </div>
      <p>{userCommentsAndNote.userComments || "Aucun commentaire"}</p>
    </div>
  );
};

export default UserReview;
