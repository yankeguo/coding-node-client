# MergeRequestFileDiff

文件修改记录

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Deletions** | **number** | 总删除条数 | [optional] [default to undefined]
**FileDiffs** | [**Array&lt;FileDiff&gt;**](FileDiff.md) | 文件差异列表 | [optional] [default to undefined]
**Insertions** | **number** | 总新增条数 | [optional] [default to undefined]
**NewSha** | **string** | 新请求的 sha 值 | [optional] [default to '']
**OldSha** | **string** | 旧请求的 sha 值 | [optional] [default to '']

## Example

```typescript
import { MergeRequestFileDiff } from './api';

const instance: MergeRequestFileDiff = {
    Deletions,
    FileDiffs,
    Insertions,
    NewSha,
    OldSha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
