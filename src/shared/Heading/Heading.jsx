const Heading = ({title}) => {
    return (
        <div>
            <h1 className="text-xl font-bold uppercase text-center pt-8 lg:pt-16 md:text-2xl lg:text-3xl">{title}</h1>
        </div>
    );
};

export default Heading;