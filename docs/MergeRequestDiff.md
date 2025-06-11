# MergeRequestDiff

合并请求 diff 信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Deletions** | **number** | 一共减少行数 | [optional] [default to undefined]
**Insertions** | **number** | 一共新增行数 | [optional] [default to undefined]
**IsLarge** | **boolean** | diff 信息是否过多，不宜于展示 | [optional] [default to false]
**NewSha** | **string** | 源分支对应的Sha值 | [optional] [default to '']
**OldSha** | **string** | 目标分支对应的Sha值 | [optional] [default to '']
**Paths** | [**Array&lt;MergeRequestDiffFile&gt;**](MergeRequestDiffFile.md) | 文件信息 | [optional] [default to undefined]

## Example

```typescript
import { MergeRequestDiff } from './api';

const instance: MergeRequestDiff = {
    Deletions,
    Insertions,
    IsLarge,
    NewSha,
    OldSha,
    Paths,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
