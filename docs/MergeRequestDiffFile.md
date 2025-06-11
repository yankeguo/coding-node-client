# MergeRequestDiffFile

diff 信息详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlobSha** | **string** | 文件对应的 blob Id | [optional] [default to '']
**ChangeType** | **string** | 文件改变类型 | [optional] [default to '']
**Deletions** | **number** | 一共删除几行 | [optional] [default to undefined]
**Insertions** | **number** | 一共新增几行 | [optional] [default to undefined]
**Path** | **string** | 文件路径 | [optional] [default to '']
**Size** | **number** | 文件大小（字节） | [optional] [default to undefined]

## Example

```typescript
import { MergeRequestDiffFile } from './api';

const instance: MergeRequestDiffFile = {
    BlobSha,
    ChangeType,
    Deletions,
    Insertions,
    Path,
    Size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
