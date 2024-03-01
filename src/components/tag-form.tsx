import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

export function CreateForm() {
  return (
    <form className="w-full space-y-6">
      <div className="space-2">
        <label htmlFor="name" className="text-sm font-medium">
          Tag Name
        </label>
        <input type="text" id="name" placeholder="Insert the tag name" required />
      </div>

      <div className="space-2 space-x-2">
        <label htmlFor="slug" className="text-sm font-medium">
          Slug
        </label>
        <input id="slug" type="text" readOnly />
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button>
          <X className="size-3" />
          Cancel
        </Button>
        <Button className="bg-teal-400 text-teal-950" type="submit">
          <Check className="size-3" />
          Save
        </Button>
      </div>
    </form>
  );
}
