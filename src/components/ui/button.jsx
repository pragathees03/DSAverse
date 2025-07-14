import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

// Simple Switch component for toggling boolean state (e.g., theme)
export const Switch = React.forwardRef(
  ({ checked, onCheckedChange, label, className, ...props }, ref) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      ref={ref}
      tabIndex={0}
      className={cn(
        "relative inline-flex h-8 w-20 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-1",
        checked
          ? "bg-primary"
          : "bg-muted border border-gray-300 shadow-sm hover:bg-gray-200",
        className
      )}
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      {...props}
    >
      {/* Track label, always above the thumb */}
      <span
        className={cn(
          "w-full text-xs font-medium text-center z-10 select-none transition-colors",
          checked ? "text-primary-foreground" : "text-gray-700"
        )}
        style={{ pointerEvents: 'none' }}
      >
        {checked ? 'Dark' : 'Light'}
      </span>
      {/* Thumb */}
      <span
        className={cn(
          "absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform border border-gray-300 z-20",
          checked ? "translate-x-12" : "translate-x-0"
        )}
      />
    </button>
  )
)
Switch.displayName = "Switch" 