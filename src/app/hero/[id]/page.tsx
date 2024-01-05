interface IProps {
  params: {
    id: string;
  };
}

export default function Hero({ params: { id } }: IProps) {
  return <>id do miranha: {id}</>;
}
