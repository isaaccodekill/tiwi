import Dolldata from '../../data/dolls.json';

export default function Page({ params }: { params: { id: string } }) {

const doll = Dolldata.find((doll) => doll.id.toString() === params.id);

    return (
        <div>
            <h1>{doll?.name}</h1>
        </div>
    );
}