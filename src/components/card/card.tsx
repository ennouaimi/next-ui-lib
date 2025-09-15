import {
  Card as ShadcnCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import React, { ReactNode } from "react";
import { Button } from "../button";
import { BgIcon } from "../bgIcon";

type CardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  customClass?: string;
  button?: boolean; // show/hide button
  buttonLabel?: string; // button text
  buttonPosition?: "top-right" | "bottom-right"; // button location
  onButtonClick?: () => void; // button click handler
};

export const Card = ({
  title,
  description,
  children,
  customClass = "",
  button = false,
  buttonLabel = "Button",
  buttonPosition = "top-right",
  onButtonClick,
}: CardProps) => {
  const handleButtonClick = onButtonClick ?? (() => {});
  return (
    <ShadcnCard
      className={`
        w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl
        border-2 border-b-4 border-gray-200 border-opacity-80
        px-4 sm:px-6 py-4 sm:py-6 rounded-xl
        flex flex-col relative
        ${customClass}
      `}
    >
      {(title || description || (button && buttonPosition === "top-right")) && (
        <CardHeader className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <BgIcon color="amber" onClick={() => {}} />
            <div>
              {title && (
                <CardTitle className="text-base sm:text-lg md:text-xl font-bold">
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription className="text-sm sm:text-base text-gray-600">
                  {description}
                </CardDescription>
              )}
            </div>
          </div>

          {button && buttonPosition === "top-right" && (
            <Button
              label={buttonLabel}
              size="medium"
              onClick={handleButtonClick}
              color="amber"
            />
          )}
        </CardHeader>
      )}

      {children && (
        <CardContent className="flex flex-col gap-3">{children}</CardContent>
      )}

      {button && buttonPosition === "bottom-right" && (
        <CardFooter className="flex justify-end pt-4">
          <Button
            label={buttonLabel}
            size="medium"
            onClick={handleButtonClick}
            color="amber"
          />
        </CardFooter>
      )}
    </ShadcnCard>
  );
};
