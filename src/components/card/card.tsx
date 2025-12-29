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
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  customClass?: string;

  // Footer
  footer?: ReactNode;

  // Buttons
  buttonLabel?: string | null;
  buttonColor?: ButtonColor;
  buttonVariant?: "primary" | "secondary";
  buttonPosition?: "top-right" | "bottom-right";
  buttonSize?: "small" | "medium" | "large" | "full";
  onButtonClick?: () => void;

  // Icon
  iconSrc?: string;
  bgIconColor?: ColorName;

  // Additional custom header content
  customHeader?: ReactNode;

  // Additional props for extreme flexibility
  classNameHeader?: string;
  classNameContent?: string;
  classNameFooter?: string;
};

export const Card = ({
  asShadcnOnly = false,
  title,
  description,
  children,
  iconSrc,
  customClass = "",
  footer,
  buttonLabel = null,
  buttonPosition = "top-right",
  bgIconColor = "amber",
  buttonColor = "lightBlue",
  buttonVariant = "primary",
  buttonSize = "medium",
  onButtonClick,
  customHeader,
  classNameHeader = "",
  classNameContent = "",
  classNameFooter = "",
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
        border-2 border-b-4 border-border
        px-4 sm:px-6 py-4 sm:py-6 rounded-xl
        flex flex-col relative
        ${customClass}
      `}
    >
      {/* Header */}
      {(title ||
        description ||
        customHeader ||
        (buttonLabel && buttonPosition === "top-right")) && (
        <CardHeader
          className={`flex items-start justify-between ${classNameHeader}`}
        >
          <div className="flex items-center gap-3">
            {iconSrc && (
              <BgIcon
                color={bgIconColor}
                iconSrc={iconSrc}
                onClick={() => {}}
              />
            )}
            <div>
              {title &&
                (typeof title === "string" ? (
                  <CardTitle className="text-main text-xl font-bold leading-5">
                    {title}
                  </CardTitle>
                ) : (
                  title
                ))}
              {description &&
                (typeof description === "string" ? (
                  <CardDescription className="text-sm text-muted-foreground">
                    {description}
                  </CardDescription>
                ) : (
                  description
                ))}
            </div>
            {customHeader}
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

      {/* Content */}
      {children && (
        <CardContent
          className={`flex flex-col gap-4 h-full ${classNameContent}`}
        >
          {children}
        </CardContent>
      )}

      {/* Footer button */}
      {buttonLabel && buttonPosition === "bottom-right" && !footer && (
        <CardFooter className={`flex justify-end pt-2 ${classNameFooter}`}>
          <Button
            label={buttonLabel}
            size={buttonSize}
            onClick={handleButtonClick}
            color={buttonColor}
            variant={buttonVariant}
          />
        </CardFooter>
      )}

      {/* Custom footer */}
      {footer && <CardFooter className={classNameFooter}>{footer}</CardFooter>}
    </ShadcnCard>
  );
};
