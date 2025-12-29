import {
  Card as ShadcnCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { ReactNode } from "react";
import { Button } from "../button";
import { BgIcon } from "../bgIcon";
import { ButtonColor, ColorName } from "@/constants/colors";

type CardProps = {
  asShadcnOnly?: boolean;
  title?: string;
  description?: string;
  children?: ReactNode;
  customClass?: string;
  buttonLabel?: string | null;
  buttonColor?: ButtonColor;
  buttonVariant?: "primary" | "secondary";
  bgIconColor?: ColorName;
  buttonPosition?: "top-right" | "bottom-right";
  iconSrc?: string;
  buttonSize?: "small" | "medium" | "large" | "full";
  onButtonClick?: () => void;
};

export const Card = ({
  asShadcnOnly = false,
  title,
  description,
  children,
  iconSrc,
  customClass = "",
  buttonLabel = null,
  buttonPosition = "top-right",
  bgIconColor = "amber",
  buttonColor = "lightBlue",
  buttonVariant = "primary",
  buttonSize = "medium",
  onButtonClick,
}: CardProps) => {
  if (asShadcnOnly) {
    return (
      <ShadcnCard data-component="shadcn-card" className={customClass}>
        {children}
      </ShadcnCard>
    );
  }

  const handleButtonClick = onButtonClick ?? (() => {});

  return (
    <ShadcnCard
      data-component="custom-card"
      className={`
        w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl
        border-2 border-b-4 border-gray-200 border-opacity-80
        px-4 sm:px-6 py-4 sm:py-6 rounded-xl
        flex flex-col relative
        ${customClass}
      `}
    >
      {(title ||
        description ||
        (buttonLabel && buttonPosition === "top-right")) && (
        <CardHeader className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {iconSrc && (
              <BgIcon
                color={bgIconColor}
                iconSrc={iconSrc}
                onClick={() => {}}
              />
            )}
            <div>
              {title && (
                <CardTitle className="text-main text-xl font-bold leading-5">
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription className="text-sm text-gray-600">
                  {description}
                </CardDescription>
              )}
            </div>
          </div>

          {buttonLabel && buttonPosition === "top-right" && (
            <Button
              label={buttonLabel}
              size={buttonSize}
              onClick={handleButtonClick}
              color={buttonColor}
              variant={buttonVariant}
            />
          )}
        </CardHeader>
      )}

      {children && (
        <CardContent className="flex flex-col gap-4 h-full">
          {children}
        </CardContent>
      )}

      {buttonLabel && buttonPosition === "bottom-right" && (
        <CardFooter className="flex justify-end pt-2">
          <Button
            label={buttonLabel}
            size={buttonSize}
            onClick={handleButtonClick}
            color={buttonColor}
            variant={buttonVariant}
          />
        </CardFooter>
      )}
    </ShadcnCard>
  );
};
