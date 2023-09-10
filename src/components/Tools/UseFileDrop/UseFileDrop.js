import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Image } from "@chakra-ui/react";
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable';

// Custom hook for file dropping and dragging
export function useFileDrop() {
    const [files, setFiles] = React.useState([]);

    const onDrop = React.useCallback(acceptedFiles => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return { files, getRootProps, getInputProps, isDragActive };
}

function DropzoneComponent() {
    const { files, getRootProps, getInputProps, isDragActive } = useFileDrop();

    return (
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" border="2px" borderColor="gray.200" borderRadius="md" p={4}  {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Dosyaları bu alana sürükleyip bırakın...</p> : <p>Bir dosyayı bu alana sürükleyin veya tıklayarak seçin</p>}
            </Box>
            <Box mt={4}>
                {files.map((file, index) => (
                    file.type.startsWith('image/') &&
                    <Draggable key={index}>
                        <Box>
                            <Resizable
                                defaultSize={{
                                    width: '100px',
                                    height: '100px'
                                }}
                                minWidth={'20%'}
                                minHeight={'20%'}
                                handleStyles={{
                                    top: { backgroundColor: '#778899', width: '5px', height: '5px' },
                                    right: { backgroundColor: '#778899', width: '5px', height: '5px' },
                                    bottom: { backgroundColor: '#778899', width: '5px', height: '5px' },
                                    left: { backgroundColor: '#778899', width: '5px', height: '5px' },
                                    topRight: { backgroundColor: '#778899', width: '5px', height: '5px' },
                                    bottomRight: { backgroundColor: '#778899', width: '5px', height: '5px' },
                                    bottomLeft: { backgroundColor: '#778899', width: '5px', height: '5px' },
                                    topLeft: { backgroundColor: '#778899', width: '5px', height: '5px' }
                                  }}
                            >
                                <Image
                                    mb={20}
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    objectFit="contain"
                                     />
                            </Resizable>
                        </Box>
                    </Draggable>
                ))}
            </Box>
        </Box>
    );
}

export default DropzoneComponent;
