import Link from "next/link"

interface CardProps {
  _id: string
  title: string
  detail: string
  pasien: string
  fisioterapis: string
}

const Card = ({ _id, title, detail, pasien, fisioterapis }: CardProps) => {
  return (
    <div key={_id} className="w-3/4 bg-white shadow-md rounded-lg p-6 mb-4">
      <Link href={`/jadwalTerapi/${_id}`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 mt-2">{detail}</p>
        <p className="text-sm text-gray-500 mt-2">
          Pasien: {pasien} | Fisioterapis: {fisioterapis}
        </p>
      </Link>
    </div>
  );
};

export default Card;
