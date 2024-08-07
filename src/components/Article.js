
const DEFAULT_DATE = 'January 1, 1970';

function Article({ title, date = DEFAULT_DATE, preview, readingTime }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}. {readingTime}</small>
            <p>{preview}</p>
        </article>
    );
}
export default Article;