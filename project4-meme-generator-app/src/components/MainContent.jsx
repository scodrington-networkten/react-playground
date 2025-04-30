const MainContent = () => {
    return (
        <section className="flex justify-center">
            <div className="container my-4 px-4 py-2">
                <form className="flex flex-wrap gap-4">
                    <section className="field-section flex flex-wrap flex-col gap-3 w-1/2 flex-[0_0_calc(50%-0.5rem)]">
                        <label htmlFor="top_text" className="font-medium">Top Text</label>
                        <input type="text" id="top_text" name="top_text" placeholder="witty top text here"
                               className="rounded border border-gray-400 py-1 px-2"/>
                    </section>
                    <section className="field-section flex flex-col gap-3  w-1/2 flex-[0_0_calc(50%-0.5rem)]">
                        <label htmlFor="bottom_text" className="font-medium">Bottom Text</label>
                        <input type="text" id="bottom_text" name="bottom_text" placeholder="witty bottom text here"
                               className="rounded border border-gray-400 py-1 px-2"/>
                    </section>
                    <section className="button-section w-full">
                        <button name="generate" id="generate" className="py-3 px-6 rounded">Get a new Image</button>
                    </section>
                    <section className="image-section w-full">
                        <div className="image-container flex-grow-1 relative">
                            <img src="http://i.imgflip.com/1bij.jpg" className="w-full" />
                            <span className="top" className="image-text font-bold uppercase text-5xl text-center absolute inset-x-0 top-0 align-text-center my-5">One does not simply</span>
                            <span className="bottom" className="image-text font-bold uppercase text-5xl text-center absolute inset-x-0 bottom-0 bottom-0 my-5">Walk into Mordor</span>
                        </div>
                    </section>
                </form>
            </div>
        </section>
    )
}
export default MainContent;
