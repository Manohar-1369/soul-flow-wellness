import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const wellnessButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-wellness",
        healing: "bg-wellness-green text-white hover:bg-wellness-green/90 shadow-wellness hover:shadow-glow",
        wellness: "bg-gradient-to-r from-wellness-green to-wellness-blue text-white hover:opacity-90 shadow-wellness",
        medical: "bg-wellness-blue text-white hover:bg-wellness-blue/90 shadow-card",
        premium: "bg-wellness-amber text-accent-foreground hover:bg-wellness-amber/90 shadow-card",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        soft: "bg-wellness-soft text-wellness-green hover:bg-wellness-soft/80 border border-wellness-green/20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface WellnessButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof wellnessButtonVariants> {
  asChild?: boolean
}

const WellnessButton = React.forwardRef<HTMLButtonElement, WellnessButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(wellnessButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
WellnessButton.displayName = "WellnessButton"

export { WellnessButton, wellnessButtonVariants }