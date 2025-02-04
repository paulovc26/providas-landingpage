export default function Home() {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mt-8">Instituto</h1>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Sobre</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla id mi fermentum ultricies. Nulla facilisi. Nullam vitae nunc et nunc egestas tincidunt. Nulla facilisi. Nullam vitae nunc et nunc egestas tincidunt.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Projetos</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla id mi fermentum ultricies. Nulla facilisi. Nullam vitae nunc et nunc egestas tincidunt. Nulla facilisi. Nullam vitae nunc et nunc egestas tincidunt.</p>
                </div>
            </div>
        </div>
    );
}