# DescribeGitRefsByShaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Sha** | **string** | 提交id | [default to undefined]
**Type** | **string** | all：列表中既包含分支也包含标签，tag：列表中只包含标签，branch：列表中只包含分支 | [default to undefined]

## Example

```typescript
import { DescribeGitRefsByShaRequest } from './api';

const instance: DescribeGitRefsByShaRequest = {
    DepotId,
    DepotPath,
    Sha,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
