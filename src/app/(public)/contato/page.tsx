import Contato from "@/components/Contato";

export default function Page() {
    return (
        <>
        <div className="flex justify-center items-center py-5 mt-5">
            <h1 className="text-4xl font-bold">Contatos</h1>
        </div>
        <Contato />
        </>
    );
}