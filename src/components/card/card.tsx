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

type CardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  customClass?: string;
  button?: boolean;
  buttonLabel?: string;
  buttonColor?: "primary" | "secondary" | "amber" | "cyan";
  bgIconColor?: "primary" | "secondary" | "amber" | "cyan";
  buttonPosition?: "top-right" | "bottom-right";
  iconSrc?: string;
  onButtonClick?: () => void;
};

export const Card = ({
  title,
  description,
  children,
  iconSrc,
  customClass = "",
  button = false,
  buttonLabel = "Button",
  buttonPosition = "top-right",
  bgIconColor = "primary",
  buttonColor = "primary",
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
            {iconSrc && (
              <BgIcon
                color={bgIconColor}
                iconSrc={iconSrc}
                onClick={() => {}}
              ></BgIcon>
            )}
            <div>
              {title && (
                <CardTitle className="text-base sm:text-lg md:text-xl font-semibold">
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
              color={buttonColor}
            />
          )}
        </CardHeader>
      )}

      {children && (
        <CardContent className="flex flex-col gap-3 font-regular">
          {children}
        </CardContent>
      )}

      {button && buttonPosition === "bottom-right" && (
        <CardFooter className="flex justify-end pt-2">
          <Button
            label={buttonLabel}
            size="medium"
            onClick={handleButtonClick}
            color={buttonColor}
          />
        </CardFooter>
      )}
    </ShadcnCard>
  );
};
