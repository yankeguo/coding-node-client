# DescribeNotesByCommitsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Commits** | **Array&lt;string&gt;** | 请求sha值列表 | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**NoteRef** | **string** | 查询的ref地址 | [optional] [default to undefined]

## Example

```typescript
import { DescribeNotesByCommitsRequest } from './api';

const instance: DescribeNotesByCommitsRequest = {
    Commits,
    DepotId,
    DepotPath,
    NoteRef,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
