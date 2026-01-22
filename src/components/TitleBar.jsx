function TitleBar(props) { // pass an argument called props to the function
    return (
        <header className="bg-white">
            <div className="mx-auto h-16 pt-4 gap-8 px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-lg font-bold italic">
                    📚 { props.title }
                </h3>
            </div>
        </header>
    )
}

export default TitleBar // tells us that we want to use this in another file