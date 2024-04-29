import React from 'react';

const FlipTooltip: React.FC = () => {
    return (
        <div className='flex items-center justify-center min-h-screen from-sky-100 via-sky-300 to-sky-200 bg-gradient-to-br'>
            <div className="mt-32 w-full">
                <div className="px-4 sm:px-8 max-w-5xl m-auto">
                    <h1 className="text-center font-semibold text-sm">Flip Tooltip</h1>
                    <p className="mt-2 text-center text-xs mb-4 text-gray-500">Animated Flipping Tooltip</p>
                    <div className="mx-auto inline-flex w-full justify-center pt-4">
                        {/* Component starts here */}
                        <a className="group max-w-max relative mx-1 flex flex-col items-center justify-center rounded-full border border-gray-500 p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-600" href="#">
                            {/* Text/Icon goes here */}
                            <p className="text-xs text-center">Hover Me</p>
                            {/* Tooltip here */}
                            <div className="transform perspective-50 transecondary-z-0 rotate-x-10 group-hover:perspective-none group-hover:transecondary-z-0 group-hover:rotate-x-0 absolute bottom-0 mb-6 origin-bottom rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                                <div className="flex max-w-xs flex-col items-center">
                                    <div className="rounded bg-gray-900 p-2 text-xs text-center shadow-lg">Tooltip Title</div>
                                    <div className="clip-bottom h-2 w-4 bg-gray-900"></div>
                                </div>
                            </div>
                        </a>
                        {/* Component ends here */}
                    </div>
                    <a href="mailto:jefte_caro@yahoo.com" className="text-xs text-center block mt-4 hover:underline">@me</a>
                </div>
            </div>
        </div>
    );
}

export default FlipTooltip;
