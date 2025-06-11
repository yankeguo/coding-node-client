# CommitFile

git 提交 文件信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 文件内容 | [optional] [default to '']
**ContentEncoding** | **string** | ENCODING_RAW：不对文件编码；ENCODING_BASE64：传入的文件内容使用 base64 编码 | [default to '']
**NewPath** | **string** | 新建文件、重命名的文件路径(仓库中没有的文件路径名称)，可以用于创建一个新路径新文件(传入NewPath)，或者给一个文件路径修改名称(需要传入Path、NewPath，WantRename传true) | [optional] [default to '']
**Path** | **string** | 文件路径(仓库中存在的路径名称)，对该路径下的文件内容进行修改(传入Path) | [default to '']
**WantDelete** | **boolean** | 是否删除 | [default to false]
**WantRename** | **boolean** | 是否重命名 | [default to false]

## Example

```typescript
import { CommitFile } from './api';

const instance: CommitFile = {
    Content,
    ContentEncoding,
    NewPath,
    Path,
    WantDelete,
    WantRename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
