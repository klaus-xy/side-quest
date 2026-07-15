import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Avatars from "../mock-data/avatars.json";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Controller, UseFormReturn } from "react-hook-form";
import { SignUpFormData } from "../pages/sign-up-page";

interface AvatarSelectionFormProps {
  form: UseFormReturn<SignUpFormData>;
}

const AvatarSelectionForm = ({ form }: AvatarSelectionFormProps) => {
  return (
    <div className="my-6 p-6">
      <h1 className="text-3xl">
        Avatar <br />
        Selection
      </h1>
      {/* <FieldDescription></FieldDescription> */}
      <p>Choose your avatar ::/</p>

      <Controller
        control={form.control}
        name="avatar"
        render={({ field, fieldState }) => (
          <Field>
            <div className="flex flex-wrap gap-4 my-4">
              {Avatars.map((avatar) => (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => field.onChange(avatar.id)}
                  aria-label={`Select ${avatar.name}`}
                  aria-pressed={field.value === avatar.id}
                >
                  <Avatar
                    className={cn(
                      "w-10 h-10 outline-2 outline-offset-2 outline-transparent",
                      field.value === avatar.id &&
                        "outline-primary animate-pulse",
                    )}
                  >
                    <AvatarImage src={avatar.url} />
                    <AvatarFallback>::</AvatarFallback>
                  </Avatar>
                </button>
              ))}
            </div>
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

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
