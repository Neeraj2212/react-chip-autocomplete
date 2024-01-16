import { useState } from "react";
import { User } from "../types";
import Chip from "./Chip";

interface ChipAutocompleteProps {
  users: User[];
}

function ChipAutocomplete({ users }: ChipAutocompleteProps) {
  const [selectedItems, setSelectedItems] = useState<User[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [focusedOption, setFocusedOption] = useState(0);
  const [isLastChipHighlighted, setIsLastChipHighlighted] = useState(false);
  const availableItems: User[] = users.filter(
    (user) =>
      !selectedItems.includes(user) &&
      user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onOptionSelect = (item: User) => {
    setSelectedItems((prev) => [...prev, item]);
    setShowOptions(true);
    setSearchValue("");
    setFocusedOption(0);
    setIsLastChipHighlighted(false);
  };

  const onRemove = (item: User) => {
    setSelectedItems((prev) => prev.filter((i) => i.email !== item.email));
    setIsLastChipHighlighted(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowDown":
        if (focusedOption < availableItems.length - 1) {
          setFocusedOption(focusedOption + 1);
        }
        break;
      case "ArrowUp":
        if (focusedOption > 0) {
          setFocusedOption(focusedOption - 1);
        }
        break;
      case "Enter":
        if (availableItems[focusedOption]) {
          onOptionSelect(availableItems[focusedOption]);
        }
        break;
      case "Backspace":
        if (searchValue === "") {
          if (isLastChipHighlighted) {
            const lastItem = selectedItems[selectedItems.length - 1];
            onRemove(lastItem);
          } else {
            setIsLastChipHighlighted(true);
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="border-b-8  border-blue-400 pb-4 w-full flex flex-wrap gap-2">
      {selectedItems.map((item, index) => (
        <Chip
          key={item.email}
          user={item}
          onRemove={onRemove}
          isHighlighted={
            isLastChipHighlighted && index === selectedItems.length - 1
          }
        />
      ))}
      <div
        className="flex-grow relative self-center"
        tabIndex={0}
        autoFocus={true}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setShowOptions(false)}
      >
        <input
          type="text"
          placeholder="Add New User"
          className="outline-none text-xl w-full h-10"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setIsLastChipHighlighted(false);
          }}
          onKeyDown={handleKeyDown}
        />
        {showOptions && availableItems.length > 0 && (
          <div className="absolute bg-white top-[64px] w-[500px] max-h-[400px] overflow-auto border border-gray-300 rounded-lg shadow-lg">
            {availableItems.map((item, index) => (
              <div
                key={item.email}
                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 cursor-pointer"
                style={{
                  backgroundColor: focusedOption === index ? "#f1f1f1" : "",
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onOptionSelect(item);
                }}
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
