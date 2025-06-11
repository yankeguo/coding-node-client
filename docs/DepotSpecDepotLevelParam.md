# DepotSpecDepotLevelParam

仓库规范 - 新增、修改仓库级别规范的参数

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowPushWildRef** | **boolean** | 允许创建规定分支类型以外的分支 | [optional] [default to false]
**DepotBranchTypeList** | [**Array&lt;DepotBranchTypeParam&gt;**](DepotBranchTypeParam.md) | 分支类型列表 | [optional] [default to undefined]
**DepotMergeRequestRuleList** | [**Array&lt;DepotMergeRequestRuleParam&gt;**](DepotMergeRequestRuleParam.md) | 合并方向规则列表 | [optional] [default to undefined]

## Example

```typescript
import { DepotSpecDepotLevelParam } from './api';

const instance: DepotSpecDepotLevelParam = {
    AllowPushWildRef,
    DepotBranchTypeList,
    DepotMergeRequestRuleList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
