# DepotSpecDetail

分支规范详细信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowPushWildRef** | **boolean** | 允许创建规定分支类型以外的分支 | [optional] [default to false]
**DepotBranchTypeList** | [**Array&lt;DepotBranchType&gt;**](DepotBranchType.md) | 分支类型列表 | [optional] [default to undefined]
**DepotMergeRequestRuleList** | [**Array&lt;DepotMergeRequestRule&gt;**](DepotMergeRequestRule.md) | 合并方向规则列表 | [optional] [default to undefined]
**Description** | **string** | 仓库规范描述信息 | [optional] [default to '']
**Name** | **string** | 仓库规范名字 | [optional] [default to '']
**Type** | **string** | system：系统级别的规范；team：团队级别的规范 | [optional] [default to '']
**UseExistingSolution** | **boolean** | 使用的是系统/团队级别的仓库规范（这个字段只在使用仓库路径查询时有用） | [optional] [default to false]

## Example

```typescript
import { DepotSpecDetail } from './api';

const instance: DepotSpecDetail = {
    AllowPushWildRef,
    DepotBranchTypeList,
    DepotMergeRequestRuleList,
    Description,
    Name,
    Type,
    UseExistingSolution,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
