import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:tw-bg-background group-[.toaster]:tw-text-foreground group-[.toaster]:tw-border-border group-[.toaster]:tw-shadow-lg",
          description: "group-[.toast]:tw-text-muted-foreground",
          actionButton:
            "group-[.toast]:tw-bg-primary group-[.toast]:tw-text-primary-foreground",
          cancelButton:
            "group-[.toast]:tw-bg-muted group-[.toast]:tw-text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }