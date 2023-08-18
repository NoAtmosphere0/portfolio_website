import image_processing from './image_processing.html';

export default function ImageProcessing() {
    return (
        <div dangerouslySetInnerHTML={{ __html: image_processing }} />
    );
    }

