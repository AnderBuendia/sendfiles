import { FC } from 'react';
import { getFileUnitSize } from '@Lib/utils/file-size-unit.utils';
import { DropzoneFile } from '@Interfaces/domain/file.interface';

export type ListFiles = {
  files: DropzoneFile[];
};

const ListFiles: FC<ListFiles> = ({ files }) => {
  return (
    <div className="form-container">
      <h4>Files</h4>
      <ul className="list-container">
        {files.map((file) => (
          <li key={file.lastModified} className="file-container">
            <p>{file.path}</p>
            <p className="text-sm text-gray-500">
              {getFileUnitSize(file.size)} MB
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFiles;