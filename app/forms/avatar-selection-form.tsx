import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Avatars from "../mock-data/avatars.json";
import { Button } from "@/components/ui/button";
import { FieldDescription, FieldGroup } from "@/components/ui/field";
const AvatarSelectionForm = () => {
  return (
    <div className="my-6 p-6">
      <h1 className="text-3xl">
        Avatar <br />
        Selection
      </h1>
      {/* <FieldDescription></FieldDescription> */}
      <p>Choose your avatar ::/</p>
      <div className="flex flex-wrap gap-4 my-4">
        {Avatars.map((avatar) => (
          <Avatar key={avatar.id} className="w-10 h-10">
            <AvatarImage src={avatar.url} />
            <AvatarFallback>::</AvatarFallback>
          </Avatar>
        ))}
      </div>

      <div>
        <Button variant="outline" size="sm" className="mt-2">
          Upload Custom Avatar
        </Button>
        <Button variant="outline" size="sm" className="mt-2 ml-2">
          Generate Avatar
        </Button>
      </div>
    </div>
  );
};

export default AvatarSelectionForm;
