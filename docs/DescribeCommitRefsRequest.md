# DescribeCommitRefsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**Sha** | **string** | 提交sha | [optional] [default to undefined]
**Type** | **string** | ref类型,all 查询分支和标签，branch查询分支，tag查询标签 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCommitRefsRequest } from './api';

const instance: DescribeCommitRefsRequest = {
    DepotPath,
    Sha,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
