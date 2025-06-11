# CreateGitMergeReqRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 合并请求内容 | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径与depotId选择其一就可以 | [optional] [default to undefined]
**DestBranch** | **string** | 目标分支 | [optional] [default to undefined]
**Reviewers** | **string** | 评审者 | [optional] [default to undefined]
**SrcBranch** | **string** | 源分支 | [optional] [default to undefined]
**Title** | **string** | 合并请求title | [optional] [default to undefined]

## Example

```typescript
import { CreateGitMergeReqRequest } from './api';

const instance: CreateGitMergeReqRequest = {
    Content,
    DepotId,
    DepotPath,
    DestBranch,
    Reviewers,
    SrcBranch,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
