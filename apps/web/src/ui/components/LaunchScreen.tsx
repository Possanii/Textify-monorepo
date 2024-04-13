import { Transition } from "@headlessui/react";
import { Spinner } from "@ui/components/ui/Spinner";
import { H1 } from "../../../../../packages/ui/src/components/typography";
import Logo from "../../../public/Logo_with_black_text.png";

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="w-full h-full fixed flex justify-center items-center ">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex gap-4 justify-center items-center">
            <img
              src={Logo.src}
              alt="Nextpoint logo"
              className="bg-none mix-blend-multiply h-20 w-20"
            />
            <H1>TEXTIFY</H1>
          </div>
          <Spinner className="h-14 w-14" />
        </div>
      </div>
    </Transition>
  );
}
