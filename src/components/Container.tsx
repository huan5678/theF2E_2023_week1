import * as React from 'react';
import {cn} from '@/lib/utils';
import {Slot} from '@radix-ui/react-slot';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({className, asChild, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <div className="grid grid-cols-8 md:grid-cols-12">
        <Comp className={cn('md:col-span-10 md:col-start-2', className)} ref={ref} {...props} />
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
