# DifferentOfCommitDetail

请求列表及文件差别列表

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Commits** | [**Array&lt;GitCommit&gt;**](GitCommit.md) | 请求列表 | [optional] [default to undefined]
**Deletions** | **number** | 总删除行数 | [optional] [default to undefined]
**DifferentOfCommits** | [**Array&lt;DifferentOfCommit&gt;**](DifferentOfCommit.md) | 差异文件列表 | [optional] [default to undefined]
**Insertions** | **number** | 总新增行数 | [optional] [default to undefined]
**UpdateFileNum** | **number** | 总文件修改数 | [optional] [default to undefined]

## Example

```typescript
import { DifferentOfCommitDetail } from './api';

const instance: DifferentOfCommitDetail = {
    Commits,
    Deletions,
    DifferentOfCommits,
    Insertions,
    UpdateFileNum,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
