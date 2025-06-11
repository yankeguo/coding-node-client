# DescribeCodeSearchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名称 | [default to undefined]
**DepotPath** | **string** | 仓库路径 | [default to undefined]
**FilePath** | **string** | 文件路径（如需查询某个路径下的代码片段，需要输入此参数） | [optional] [default to undefined]
**KeyWord** | **string** | 查询代码片段关键字 | [default to undefined]
**PageNumber** | **number** | 页码数量 | [default to undefined]
**PageSize** | **number** | 页码大小 | [default to undefined]

## Example

```typescript
import { DescribeCodeSearchRequest } from './api';

const instance: DescribeCodeSearchRequest = {
    BranchName,
    DepotPath,
    FilePath,
    KeyWord,
    PageNumber,
    PageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
