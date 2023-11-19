import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {Slot} from '@radix-ui/react-slot';

import {cn} from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-btn transition duration-300 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-orange-40 text-white hover:bg-black disabled:bg-gray-60',
        outline:
          'bg-white/80 border-[0.09375rem] border-orange-40 text-orange-40 hover:border-black hover:text-black disabled:border-gray-60 disabled:text-gray-60',
        secondary: 'bg-white text-blue-30 hover:bg-blue-30 hover:text-white disabled:bg-gray-60',
        submit: 'bg-blue-30 text-white hover:bg-blue-20 disabled:bg-gray-60',
        ghost: 'text-blue-40 hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'px-5 py-1.5',
        lg: 'px-10 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export {Button, buttonVariants};
