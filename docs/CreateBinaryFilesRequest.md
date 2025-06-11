# CreateBinaryFilesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**DestRef** | **string** | 目标分支名，如果想上传至源分支，值与源分支名一致 | [optional] [default to undefined]
**GitFiles** | [**Array&lt;GitFile&gt;**](GitFile.md) | 文件信息，其中Path需带上文件名，例如：/data/ReadMe.md。  Content为文件字节流进行Base64编码后的字符串。 | [optional] [default to undefined]
**LastCommitSha** | **string** | 源分支最后一次提交sha | [optional] [default to undefined]
**Message** | **string** | 提交信息 | [optional] [default to undefined]
**SrcRef** | **string** | 源分支名 | [optional] [default to undefined]

## Example

```typescript
import { CreateBinaryFilesRequest } from './api';

const instance: CreateBinaryFilesRequest = {
    DepotId,
    DepotPath,
    DestRef,
    GitFiles,
    LastCommitSha,
    Message,
    SrcRef,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
