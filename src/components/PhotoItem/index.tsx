import * as C from './styles';

type Props = {
    name: string;
    url: string;
    onDelete: (name: string) => void
}

export const PhotoItem = ({ name, url, onDelete }: Props) => {
    return (
        <C.Container>

            <label htmlFor="">
                <img src={url} />
                {name}
            </label>

            <button onClick={() => onDelete(name)}>
                Excluir
            </button>
        </C.Container>
    );
}