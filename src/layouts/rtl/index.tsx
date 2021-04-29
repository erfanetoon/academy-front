const RTL = () => (
    <>
        <style jsx global>{`
            body,
            html {
                direction: rtl;
                text-align: right;
                font-family: IRANSans, '-apple-system', 'BlinkMacSystemFont',
                    '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial',
                    'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"' !important;
            }
            *,
            select,
            option {
                font-family: IRANSans, '-apple-system', 'BlinkMacSystemFont',
                    '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial',
                    'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"' !important;
            }
        `}</style>
    </>
);

export default RTL;
