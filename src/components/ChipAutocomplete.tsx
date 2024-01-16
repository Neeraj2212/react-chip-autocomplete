import { useState } from "react";
import { User } from "../types";
import Chip from "./Chip";

interface ChipAutocompleteProps {
  users: User[];
}

function ChipAutocomplete({ users }: ChipAutocompleteProps) {
  const [selectedItems, setSelectedItems] = useState<User[]>([]);
  const availableItems: User[] = users.filter(
    (user) => !selectedItems.includes(user)
  );
  const [showOptions, setShowOptions] = useState(false);

  const onOptionSelect = (item: User) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  const onRemove = (item: User) => {
    setSelectedItems((prev) => prev.filter((i) => i.email !== item.email));
  };

  return (
    <div className="border-b-8  border-blue-400 pb-4 w-full flex flex-wrap gap-2">
      {selectedItems.map((item) => (
        <Chip key={item.email} user={item} onRemove={onRemove} />
      ))}
      <div
        className="flex-grow relative self-center"
        onFocus={() => setShowOptions(true)}
        onBlur={() => setShowOptions(false)}
      >
        <input
          type="text"
          placeholder="Add New User"
          className="outline-none text-xl w-full h-10"
        />
        {showOptions && availableItems.length > 0 && (
          <div className="absolute bg-white top-[64px] w-[500px] max-h-[400px] overflow-auto border border-gray-300 rounded-lg shadow-lg">
            {availableItems.map((item) => (
              <div
                key={item.email}
                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 cursor-pointer"
                onMouseDown={() => onOptionSelect(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="grid grid-cols-2">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChipAutocomplete;
