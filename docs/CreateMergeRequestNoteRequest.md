# CreateMergeRequestNoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 行评论内容 | [default to undefined]
**DepotPath** | **string** | 仓库路径 | [default to undefined]
**Form** | [**MergeRequestDiffNoteForm**](MergeRequestDiffNoteForm.md) |  | [optional] [default to undefined]
**MergeId** | **number** | 合并请求的Iid | [default to undefined]
**ParentId** | **number** | 行评论的父亲Id | [default to undefined]

## Example

```typescript
import { CreateMergeRequestNoteRequest } from './api';

const instance: CreateMergeRequestNoteRequest = {
    Content,
    DepotPath,
    Form,
    MergeId,
    ParentId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
