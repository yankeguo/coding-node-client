# DescribeGitContributorsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库Id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**Ref** | **string** | 分支或标签名，默认 HEAD | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitContributorsRequest } from './api';

const instance: DescribeGitContributorsRequest = {
    DepotId,
    DepotPath,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
