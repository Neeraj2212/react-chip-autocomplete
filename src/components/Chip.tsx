import { User } from "../types";

interface ChipProps {
  user: User;
  onRemove: (item: User) => void;
  isHighlighted: boolean;
}

function Chip({ user, onRemove, isHighlighted }: ChipProps) {
  return (
    <div
      key={user.email}
      className={`flex items-center gap-2 pr-2 text-white rounded-full ${
        isHighlighted ? "bg-blue-600" : "bg-blue-400"
      }`}
    >
      <img
        src={user.image}
        alt={user.name}
        className="h-10 w-10 rounded-full "
      />
      <span className="font-bold">{user.name}</span>
      <button className="outline-none pr-1" onClick={() => onRemove(user)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.707 1.293a1 1 0 010 1.414L1.707 19.707a1 1 0 01-1.414-1.414L17.293.293a1 1 0 011.414 0z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.293 1.293a1 1 0 000 1.414L18.293 19.707a1 1 0 001.414-1.414L2.707.293a1 1 0 00-1.414 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Chip;
