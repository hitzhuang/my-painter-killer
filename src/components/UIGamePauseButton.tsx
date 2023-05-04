import { useState } from 'react';

interface UIGamePauseButtonProps {
  onClick: (paused: boolean) => void;
}

const UIGamePauseButton = ({ onClick }: UIGamePauseButtonProps) => {
  const [paused, setPaused] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setPaused(!paused);
    onClick(!paused);
  };

  const PauseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
      />
    </svg>
  );
  const ContinueIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  );
  return (
    <div className="select-none absolute top-2 right-2">
      <button
        onClick={handleClick}
        className="border-stone-100 text-white text-4xl bg-black/10 active:scale-90 border-2 p-2 border-white/30"
      >
        {paused ? <ContinueIcon /> : <PauseIcon />}
      </button>
    </div>
  );
};

export default UIGamePauseButton;